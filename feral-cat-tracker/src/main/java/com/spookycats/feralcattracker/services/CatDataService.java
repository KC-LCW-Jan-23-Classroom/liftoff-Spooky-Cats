package com.spookycats.feralcattracker.services;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.spookycats.feralcattracker.data.CatRepository;
import com.spookycats.feralcattracker.models.CatData;
import com.spookycats.feralcattracker.models.dto.CatDataFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Optional;

@Service
public class CatDataService {
    @Autowired
    CatRepository catRepository;


    public void addNewCat(CatDataFormDTO catDataFormDTO, MultipartFile file) throws IOException{
        CatData cat = new CatData();
        cat.setMicrochipNumber(catDataFormDTO.getMicrochipNumber());
        cat.setName(catDataFormDTO.getName());
        cat.setAddressLastSeen(catDataFormDTO.getAddressLastSeen());
        cat.setSex(catDataFormDTO.getSex());
        cat.setBreed(catDataFormDTO.getBreed());
        cat.setColor(catDataFormDTO.getColor());
        cat.setFurType(catDataFormDTO.getFurType());
        cat.setWeight(catDataFormDTO.getWeight());
        cat.setEstimatedAge(catDataFormDTO.getEstimatedAge());
        cat.setAlteredStatus(catDataFormDTO.getAlteredStatus());
        cat.setRabiesVaccineDate(catDataFormDTO.getRabiesVaccineDate());
        cat.setDistemperVaccineDate(catDataFormDTO.getDistemperVaccineDate());
        cat.setFhvVaccineDate(catDataFormDTO.getFhvVaccineDate());
        cat.setFivVaccineDate(catDataFormDTO.getFivVaccineDate());
        cat.setFelvVaccineDate(catDataFormDTO.getFelvVaccineDate());
        cat.setBordetellaVaccineDate(catDataFormDTO.getBordetellaVaccineDate());
        cat.setDateCaptured(catDataFormDTO.getDateCaptured());
        cat.setNotes(catDataFormDTO.getNotes());
        cat.setImage(catDataFormDTO.getImage());
        if(file != null){
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            cat.setFileName(fileName);
            cat.setType(file.getContentType());
            cat.setData(file.getBytes());
        }
        cat.setLastModifiedUser("System User");       //TODO: Extrapolate the created by user from logged in user
        cat.setLastModifiedDate(String.valueOf(LocalDate.now()));
        cat.setCreatedDate(String.valueOf(LocalDate.now()));
        catRepository.save(cat);
    }

    public CatData getFile(int id) {
        return catRepository.findById(id).get();
    }


    public void updateCat(CatDataFormDTO catDataFormDTO){
        CatData updateCat = catRepository.findByMicrochipNumber(catDataFormDTO.getMicrochipNumber());
        updateCat.setLastModifiedDate(String.valueOf(LocalDate.now()));
        updateCat.setAddressLastSeen(catDataFormDTO.getAddressLastSeen());
        updateCat.setSex(catDataFormDTO.getSex());
        updateCat.setBreed(catDataFormDTO.getBreed());
        updateCat.setColor(catDataFormDTO.getColor());
        updateCat.setFurType(catDataFormDTO.getFurType());
        updateCat.setWeight(catDataFormDTO.getWeight());
        updateCat.setEstimatedAge(catDataFormDTO.getEstimatedAge());
        updateCat.setAlteredStatus(catDataFormDTO.getAlteredStatus());
        updateCat.setRabiesVaccineDate(catDataFormDTO.getRabiesVaccineDate());
        updateCat.setDistemperVaccineDate(catDataFormDTO.getDistemperVaccineDate());
        updateCat.setFhvVaccineDate(catDataFormDTO.getFhvVaccineDate());
        updateCat.setFivVaccineDate(catDataFormDTO.getFivVaccineDate());
        updateCat.setFelvVaccineDate(catDataFormDTO.getFelvVaccineDate());
        updateCat.setBordetellaVaccineDate(catDataFormDTO.getBordetellaVaccineDate());
        updateCat.setDateCaptured(catDataFormDTO.getDateCaptured());
        updateCat.setNotes(catDataFormDTO.getNotes());
        updateCat.setImage(catDataFormDTO.getImage());
        catRepository.save(updateCat);
        //TODO: Fix this class to update changed fields, ignore nulls. Right now it does not accept new field changes, just updates last modified date.

    }

    public Iterable<CatData> findAllCats(){
        return catRepository.findAll();
    }

    public Boolean findExistingCat(CatDataFormDTO catDataFormDTO){
        Optional<CatData> cat = Optional.ofNullable(catRepository.findByMicrochipNumber(catDataFormDTO.getMicrochipNumber()));
        if(cat.isPresent()){
            return true;
        } else {
            return false;
        }
    }
    public CatData findByMicrochip(String microchipNumber){
       return catRepository.findByMicrochipNumber(microchipNumber);
    }

    public void deleteCatByMicrochip(String microchipNumber){
        catRepository.delete(catRepository.findByMicrochipNumber(microchipNumber)
        );

    }

    // Create methods to call each repository method
}
