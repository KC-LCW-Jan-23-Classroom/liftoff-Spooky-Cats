package com.spookycats.feralcattracker.controllers;

import com.spookycats.feralcattracker.data.CatRepository;
import com.spookycats.feralcattracker.models.CatData;
import com.spookycats.feralcattracker.models.ResponseFile;
import com.spookycats.feralcattracker.models.dto.CatDataFormDTO;
import com.spookycats.feralcattracker.services.CatDataService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

@RestController
public class CatDataController {

    @Autowired
    CatDataService catDataService;

    @Autowired
    CatRepository catRepository;

    @GetMapping("/find")
    public Iterable<CatData> getCats(){
        return catDataService.findAllCats();
    }

    @GetMapping("/results")
    public ResponseEntity<List<CatData>> findByQuery(@RequestParam("query") String query){
        //If (queryType) call correct service method

        return ResponseEntity.ok(catRepository.searchCats(query));
    }

    @GetMapping("/files")
    public ResponseEntity<List<ResponseFile>> getListFiles() {
        List<ResponseFile> files = catDataService.getAllFiles().map(dbFile -> {
            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/files/")
                    .path(dbFile.getId())
                    .toUriString();

            return new ResponseFile(
                    dbFile.getName(),
                    fileDownloadUri,
                    dbFile.getType(),
                    dbFile.getData().length);
        }).collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK).body(files);
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        ResponseEntity response;
        String message = "";
        try {
            catDataService.store(file);
            message = "Uploaded the file successfully: " + file.getOriginalFilename();
            response = ResponseEntity.status(HttpStatus.OK).body((message));
            return response;
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            response = ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body((message));
            return response;
        }
    }

    @PostMapping("/log")
    public ResponseEntity<String> processCatDataForm(@RequestBody CatDataFormDTO catDataFormDTO,
                                                      HttpServletRequest request)  {
        ResponseEntity response;

        if(catDataFormDTO.getMicrochipNumber() == null || catDataFormDTO.getMicrochipNumber().isBlank())
        {
            response = ResponseEntity.status(HttpStatus.BAD_REQUEST).body("All cats require a Microchip number.");
            return response;
        }

        Boolean existingCat = catDataService.findExistingCat(catDataFormDTO);

        if(existingCat == true){
            catDataService.updateCat(catDataFormDTO);
            response = ResponseEntity.status(HttpStatus.OK).body("[TODO]Existing Cat has been updated.");
        } else {
            catDataService.addNewCat(catDataFormDTO);
            response = ResponseEntity.status(HttpStatus.OK).body("New cat logged.");
        }

        return response;
    }

}
