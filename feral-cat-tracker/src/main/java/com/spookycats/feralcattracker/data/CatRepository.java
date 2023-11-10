package com.spookycats.feralcattracker.data;

import com.spookycats.feralcattracker.models.CatData;
import com.spookycats.feralcattracker.models.ContactSubmission;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CatRepository extends CrudRepository<CatData, Integer> {

    @Query (value="SELECT * FROM cat_data  WHERE " +
            "cat_data.microchip_number LIKE CONCAT('%',:query, '%')", nativeQuery = true)
    List<CatData> searchCatsByMicrochip(String query);

    @Query (value="SELECT * FROM cat_data  WHERE " +
            "cat_data.address_last_seen LIKE CONCAT('%', :query, '%')", nativeQuery = true)
    List<CatData>searchByLocation(String query);

    @Query (value ="SELECT * FROM cat_data WHERE " +
            "cat_data.color LIKE CONCAT('%', :query, '%')", nativeQuery = true)
    List<CatData>searchByColor(String query);

    @Query (value ="SELECT * FROM cat_data WHERE " +
            "cat_data.color LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.address_last_seen LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.altered_status LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.bordetella_vaccine_date LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.breed LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.color LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.created_date LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.date_captured LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.distemper_vaccine_date LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.estimated_age LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.felv_vaccine_date LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.fhv_vaccine_date LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.fiv_vaccine_date LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.fur_type LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.last_modified_date LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.last_modified_user LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.microchip_number LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.name LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.notes LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.rabies_vaccine_date LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.sex LIKE CONCAT('%', :query, '%')" +
            "OR cat_data.weight LIKE CONCAT('%', :query, '%')", nativeQuery = true)
    List<CatData>searchByAll(String query);

    CatData findByMicrochipNumber(String microchipNumber);

    // create separate methods for each search

}
