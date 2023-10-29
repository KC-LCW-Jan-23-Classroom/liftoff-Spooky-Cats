package com.spookycats.feralcattracker.data;

import com.spookycats.feralcattracker.models.CatData;
import com.spookycats.feralcattracker.models.ContactSubmission;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CatRepository extends CrudRepository<CatData, Integer> {

    CatData findByMicrochipNumber(String microchipNumber);

}
