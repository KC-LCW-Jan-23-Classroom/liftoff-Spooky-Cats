package com.spookycats.feralcattracker.data;

import com.spookycats.feralcattracker.models.ContactSubmission;
import com.spookycats.feralcattracker.models.User;
import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<ContactSubmission, Integer> {

    ContactSubmission save(ContactSubmission contactSubmission);

    ContactSubmission findByName(String name);
}
