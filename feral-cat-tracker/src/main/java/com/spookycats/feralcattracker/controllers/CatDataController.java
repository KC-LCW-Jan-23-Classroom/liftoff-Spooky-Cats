package com.spookycats.feralcattracker.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.spookycats.feralcattracker.data.CatRepository;
import com.spookycats.feralcattracker.models.CatData;
import com.spookycats.feralcattracker.models.ResponseFile;
import com.spookycats.feralcattracker.models.ResponseMessage;
import com.spookycats.feralcattracker.models.dto.CatDataFormDTO;
import com.spookycats.feralcattracker.services.CatDataService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
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


    @GetMapping("/find-by-microchip-number")

    public CatData getCat(@RequestParam("microchipNumber") String microchipNumber){
        return catDataService.findByMicrochip(microchipNumber);
    }

    @PostMapping("/delete")
    public ResponseEntity<ResponseMessage> deleteCatByMicrochipNumber(@RequestBody String microchipNumber){
       ResponseEntity response;
        try {
           catDataService.deleteCatByMicrochip(microchipNumber);
       } catch (Exception exception) {
            response = ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Failed to delete cat");
            return response;
        }
        response = ResponseEntity.status(HttpStatus.OK).body("Cat deleted.");
        return response;
    }


    @GetMapping("/results")
    public ResponseEntity<List<CatData>> findByQuery(@RequestParam("query") String query,
                                                     @RequestParam("queryType") String queryType) {
        if ("microchip".equals(queryType)) {
            return ResponseEntity.ok(catRepository.searchCatsByMicrochip(query));
        }

        if ("location".equals(queryType)) {
            return ResponseEntity.ok(catRepository.searchByLocation(query));
        }

        if ("color".equals(queryType)) {
            return ResponseEntity.ok(catRepository.searchByColor(query));
        }

        if ("all".equals(queryType)) {
            return ResponseEntity.ok(catRepository.searchByAll(query));
        }

        System.out.println("Received query: " + query);
        System.out.println("Received queryType: " + queryType);

        return ResponseEntity.ok(catRepository.searchByAll(query));
    }

    @PostMapping( "/log")
    public ResponseEntity<ResponseMessage> processCatDataForm(@RequestParam("cat") String cat, @RequestPart(value = "file", required = false) MultipartFile file, HttpServletRequest request) throws IOException {
        ResponseEntity response;
        ObjectMapper mapper = new ObjectMapper();
        CatDataFormDTO catDTO = mapper.readValue(cat, CatDataFormDTO.class);

        if(catDTO.getMicrochipNumber() == null || catDTO.getMicrochipNumber().isBlank())
        {
            response = ResponseEntity.status(HttpStatus.BAD_REQUEST).body("All cats require a Microchip number.");
            return response;
        }
        Boolean existingCat = catDataService.findExistingCat(catDTO);

        try{

            if(existingCat == true){
                catDataService.updateCat(catDTO);
                response = ResponseEntity.status(HttpStatus.OK).body("[TODO]Existing Cat has been updated.");
            } else {
                catDataService.addNewCat(catDTO, file);
                response = ResponseEntity.status(HttpStatus.OK).body("New cat logged.");
            }

            return response;
        } catch (Exception e) {
            return response = ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Unable to save the cat, please try again.");
        }
    }

    @PostMapping( "/update")
    public ResponseEntity<ResponseMessage> updateCat(@RequestParam("cat") String cat, @RequestPart(value = "file", required = false) MultipartFile file, HttpServletRequest request) throws IOException {
        ResponseEntity response;
        ObjectMapper mapper = new ObjectMapper();
        CatDataFormDTO catDTO = mapper.readValue(cat, CatDataFormDTO.class);

        if(catDTO.getMicrochipNumber() == null || catDTO.getMicrochipNumber().isBlank())
        {
            response = ResponseEntity.status(HttpStatus.BAD_REQUEST).body("All cats require a Microchip number.");
            return response;
        }
        Boolean existingCat = catDataService.findExistingCat(catDTO);

        try{
            if(existingCat == true){
                catDataService.updateCat(catDTO);
                response = ResponseEntity.status(HttpStatus.OK).body("Existing Cat has been updated.");
                return response;
            }

        } catch (Exception e) {
            return response = ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Unable to save the cat, please try again.");
        }
        return response = ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Unable to save the cat, please try again.");
    }

    @GetMapping("/cat_data/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable int id) {
        CatData cat = catDataService.getFile(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + cat.getFileName() + "\"")
                .body(cat.getData());
    }



}
