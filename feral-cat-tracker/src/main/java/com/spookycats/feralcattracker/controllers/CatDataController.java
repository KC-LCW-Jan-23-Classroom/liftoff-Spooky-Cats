package com.spookycats.feralcattracker.controllers;

import com.spookycats.feralcattracker.data.CatRepository;
import com.spookycats.feralcattracker.models.CatData;
import com.spookycats.feralcattracker.models.dto.CatDataFormDTO;
import com.spookycats.feralcattracker.services.CatDataService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CatDataController {

    @Autowired
    CatDataService catDataService;
    @Autowired
    private CatRepository catRepository;


    //TODO: GET MAPPING, RETURN ALL CATS. FILTER CATS BY SEARCHING

    @GetMapping("/find")
    public Iterable<CatData> getCats(){
        return catDataService.findAllCats();
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

        System.out.println("Received query: " + query);
        System.out.println("Received queryType: " + queryType);

        return ResponseEntity.ok(catRepository.searchByAll(query));
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
