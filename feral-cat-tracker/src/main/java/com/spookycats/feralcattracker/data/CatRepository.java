package com.spookycats.feralcattracker.data;

import com.spookycats.feralcattracker.models.CatData;
import com.spookycats.feralcattracker.models.ContactSubmission;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CatRepository extends CrudRepository<CatData, Integer> {

    @Query(value="SELECT * FROM cat_data  WHERE " +
            "cat_data.microchip_number LIKE CONCAT('%',:query, '%')" +
            "Or cat_data.address_last_seen LIKE CONCAT('%', :query, '%')", nativeQuery = true)
    List<CatData> searchCats(String query);
    CatData findByMicrochipNumber(String microchipNumber);

    // create separate methods for each search

}
