package com.spookycats.feralcattracker.models.dto;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

public class CatDataFormDTO {
    public String microchipNumber;
    public String name;
    public String addressLastSeen;
    public String sex;
    public String breed;
    public String color;
    public String furType;
    public String weight;
    public String estimatedAge;
    public String alteredStatus;
    public String rabiesVaccineDate;
    public String distemperVaccineDate;
    public String fhvVaccineDate;
    public String fivVaccineDate;
    public String felvVaccineDate;
    public String bordetellaVaccineDate;
    public String dateCaptured;
    public String notes;
    public String image;
    public String fileName;
    public String type;
    public byte[] data;
    public String lastModifiedUser;

    public CatDataFormDTO() {
    }

    public CatDataFormDTO(String microchipNumber, String name, String addressLastSeen, String sex, String breed, String color, String furType, String weight, String estimatedAge, String alteredStatus, String rabiesVaccineDate, String distemperVaccineDate, String fhvVaccineDate, String fivVaccineDate, String felvVaccineDate, String bordetellaVaccineDate, String dateCaptured, String notes, String image, String fileName, String type, byte[] data, String lastModifiedUser) {
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

}
