package com.spookycats.feralcattracker.models;

import jakarta.persistence.*;
import org.springframework.context.annotation.Primary;
import org.springframework.data.annotation.Id;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.Objects;

@Entity
public class CatData extends AbstractEntity {

    @Id
    private String microchipNumber;
    private String name;
    private String addressLastSeen;
    private String sex;
    private String breed;
    private String color;
    private String furType;
    private String weight;
    private String estimatedAge;
    private String alteredStatus;
    private String rabiesVaccineDate;
    private String distemperVaccineDate;
    private String fhvVaccineDate;
    private String fivVaccineDate;
    private String felvVaccineDate;
    private String bordetellaVaccineDate;
    private String dateCaptured;
    private String notes;
    private String image;
    private String fileName;
    private String type;
    @Lob
    @Column(name = "data", columnDefinition = "LONGBLOB")
    private byte[] data;
    private String lastModifiedUser;
    private String lastModifiedDate;
    private String createdDate;


    public CatData() {
    }

    public CatData(String microchipNumber, String name, String addressLastSeen, String sex, String breed, String color, String furType, String weight, String estimatedAge, String alteredStatus, String rabiesVaccineDate, String distemperVaccineDate, String fhvVaccineDate, String fivVaccineDate, String felvVaccineDate, String bordetellaVaccineDate, String dateCaptured, String notes, String image, String fileName, String type, byte[] data, String lastModifiedUser, String lastModifiedDate, String createdDate) {
        this.microchipNumber = microchipNumber;
        this.name = name;
        this.addressLastSeen = addressLastSeen;
        this.sex = sex;
        this.breed = breed;
        this.color = color;
        this.furType = furType;
        this.weight = weight;
        this.estimatedAge = estimatedAge;
        this.alteredStatus = alteredStatus;
        this.rabiesVaccineDate = rabiesVaccineDate;
        this.distemperVaccineDate = distemperVaccineDate;
        this.fhvVaccineDate = fhvVaccineDate;
        this.fivVaccineDate = fivVaccineDate;
        this.felvVaccineDate = felvVaccineDate;
        this.bordetellaVaccineDate = bordetellaVaccineDate;
        this.dateCaptured = dateCaptured;
        this.notes = notes;
        this.image = image;
        this.fileName = fileName;
        this.type = type;
        this.data = data;
        this.lastModifiedUser = lastModifiedUser;
        this.lastModifiedDate = lastModifiedDate;
        this.createdDate = createdDate;
        String fileDownloadUri = getFileDownloadUri();
    }

    public String getMicrochipNumber() {
        return microchipNumber;
    }

    public void setMicrochipNumber(String microchipNumber) {
        this.microchipNumber = microchipNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddressLastSeen() {
        return addressLastSeen;
    }

    public void setAddressLastSeen(String addressLastSeen) {
        this.addressLastSeen = addressLastSeen;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getFurType() {
        return furType;
    }

    public void setFurType(String furType) {
        this.furType = furType;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getEstimatedAge() {
        return estimatedAge;
    }

    public void setEstimatedAge(String estimatedAge) {
        this.estimatedAge = estimatedAge;
    }

    public String getAlteredStatus() {
        return alteredStatus;
    }

    public void setAlteredStatus(String alteredStatus) {
        this.alteredStatus = alteredStatus;
    }

    public String getRabiesVaccineDate() {
        return rabiesVaccineDate;
    }

    public void setRabiesVaccineDate(String rabiesVaccineDate) {
        this.rabiesVaccineDate = rabiesVaccineDate;
    }

    public String getDistemperVaccineDate() {
        return distemperVaccineDate;
    }

    public void setDistemperVaccineDate(String distemperVaccineDate) {
        this.distemperVaccineDate = distemperVaccineDate;
    }

    public String getFhvVaccineDate() {
        return fhvVaccineDate;
    }

    public void setFhvVaccineDate(String fhvVaccineDate) {
        this.fhvVaccineDate = fhvVaccineDate;
    }

    public String getFivVaccineDate() {
        return fivVaccineDate;
    }

    public void setFivVaccineDate(String fivVaccineDate) {
        this.fivVaccineDate = fivVaccineDate;
    }

    public String getFelvVaccineDate() {
        return felvVaccineDate;
    }

    public void setFelvVaccineDate(String felvVaccineDate) {
        this.felvVaccineDate = felvVaccineDate;
    }

    public String getBordetellaVaccineDate() {
        return bordetellaVaccineDate;
    }

    public void setBordetellaVaccineDate(String bordetellaVaccineDate) {
        this.bordetellaVaccineDate = bordetellaVaccineDate;
    }

    public String getDateCaptured() {
        return dateCaptured;
    }

    public void setDateCaptured(String dateCaptured) {
        this.dateCaptured = dateCaptured;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getLastModifiedUser() {
        return lastModifiedUser;
    }

    public void setLastModifiedUser(String lastModifiedUser) {
        this.lastModifiedUser = lastModifiedUser;
    }

    public String getLastModifiedDate() {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public String getFileDownloadUri() {
        return ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .path("cat_data/")
                .path(this.stringId())
                .toUriString();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        if (!super.equals(o)) return false;
        CatData catData = (CatData) o;
        return Objects.equals(microchipNumber, catData.microchipNumber);
    }

    @Override
    public int hashCode() {
        return Objects.hash(super.hashCode(), microchipNumber);
    }
}
