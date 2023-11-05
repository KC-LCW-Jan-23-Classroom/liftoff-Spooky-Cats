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
            "cat_data.microchip_number LIKE CONCAT('%',:query, '%') = :microchip", nativeQuery = true)
    List<CatData> searchCatsByMicrochip(String query);

    @Query (value="SELECT * FROM cat_data  WHERE " +
            "cat_data.address_last_seen LIKE CONCAT('%', :query, '%') = :location", nativeQuery = true)
    List<CatData>searchByLocation(String query);

    @Query (value ="SELECT * FROM cat_data  WHERE " +
            "cat_data LIKE CONCAT('%', :query, '%')", nativeQuery = true)
    List<CatData>returnAllCats(String query);

    CatData findByMicrochipNumber(String microchipNumber);

    // create separate methods for each search

}
