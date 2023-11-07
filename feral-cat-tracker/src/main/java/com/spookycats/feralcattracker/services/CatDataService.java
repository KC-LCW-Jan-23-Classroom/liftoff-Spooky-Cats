package com.spookycats.feralcattracker.services;
import com.spookycats.feralcattracker.data.CatRepository;
import com.spookycats.feralcattracker.data.FileRepository;
import com.spookycats.feralcattracker.models.CatData;
import com.spookycats.feralcattracker.models.Files;
import com.spookycats.feralcattracker.models.dto.CatDataFormDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

@Service
public class CatDataService {
    @Autowired
    CatRepository catRepository;

    @Autowired
    FileRepository fileRepository;

    public void addNewCat(CatDataFormDTO catDataFormDTO){
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
        cat.setLastModifiedUser("System User");       //TODO: Extrapolate the created by user from logged in user
        cat.setLastModifiedDate(String.valueOf(LocalDate.now()));
        cat.setCreatedDate(String.valueOf(LocalDate.now()));
        catRepository.save(cat);
    }

    public Files store(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Files newFile = new Files(fileName, file.getContentType(), file.getBytes());

        return fileRepository.save(newFile);
    }

    public Files getFile(String id) {
        return fileRepository.findById(id).get();
    }

    public Stream<Files> getAllFiles() {
        return fileRepository.findAll().stream();
    }



    public void updateCat(CatDataFormDTO catDataFormDTO){
        CatData updateCat = catRepository.findByMicrochipNumber(catDataFormDTO.getMicrochipNumber());
        updateCat.setLastModifiedDate(String.valueOf(LocalDate.now()));
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

    // Create methods to call each repository method
}
