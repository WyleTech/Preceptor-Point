package com.SquirrelMaster.preceptor_point_website.Controller;

import com.SquirrelMaster.preceptor_point_website.PreceptorForm;
import com.SquirrelMaster.preceptor_point_website.PreceptorFormRepository;
import com.SquirrelMaster.preceptor_point_website.Exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class PreceptorFormController {
	@Autowired
	PreceptorFormRepository preceptorFormRepository;

	@CrossOrigin(origins = "http://localhost:3000")
	// Get All preceptorForm
	@GetMapping("/preceptor")
	public List<PreceptorForm> getAllPreceptorForm() {
		return preceptorFormRepository.findAll();
	}

	@CrossOrigin(origins = "http://localhost:3000")
	// Create a new preceptorForm
	@PostMapping("/preceptor")
	public PreceptorForm createPreceptorForm(@Valid @RequestBody PreceptorForm preceptorForm) {
		return preceptorFormRepository.save(preceptorForm);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	// Get a Single preceptorForm
	@GetMapping("/preceptor/{id}")
	public PreceptorForm getPreceptorFormById(@PathVariable(value = "id") Long preceptorFormId) {
		return preceptorFormRepository.findById(preceptorFormId)
				.orElseThrow(() -> new ResourceNotFoundException("PreceptorForm", "id", preceptorFormId));
	}

	@CrossOrigin(origins = "http://localhost:3000")
	// Update a preceptorForm
	@PutMapping("/preceptor/{id}")
	public PreceptorForm updatePreceptorForm(@PathVariable(value = "id") Long preceptorFormId,
			@Valid @RequestBody PreceptorForm preceptorFormDetails) {
		PreceptorForm preceptorForm = preceptorFormRepository.findById(preceptorFormId)
				.orElseThrow(() -> new ResourceNotFoundException("PreceptorForm", "id", preceptorFormId));
		preceptorForm.setFirstName(preceptorFormDetails.getFirstName());
		preceptorForm.setLastName(preceptorFormDetails.getLastName());
		preceptorForm.setStreetAddress(preceptorFormDetails.getStreetAddress());
		preceptorForm.setStreetAddress2(preceptorFormDetails.getStreetAddress2());
		preceptorForm.setCity(preceptorFormDetails.getCity());
		preceptorForm.setState(preceptorFormDetails.getState());
		preceptorForm.setZip(preceptorFormDetails.getZip());
		preceptorForm.setNpOverYear(preceptorFormDetails.getNpOverYear());
		preceptorForm.setLocationType(preceptorFormDetails.getLocationType());
		PreceptorForm updatedPreceptorForm = preceptorFormRepository.save(preceptorForm);
		return updatedPreceptorForm;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	// Delete a PreceptorForm
	@DeleteMapping("/preceptor/{id}")
	public ResponseEntity<?> deletePreceptorForm(@PathVariable(value = "id") Long preceptorFormId) {
		PreceptorForm preceptorForm = preceptorFormRepository.findById(preceptorFormId)
				.orElseThrow(() -> new ResourceNotFoundException("PreceptorForm", "id", preceptorFormId));
		preceptorFormRepository.delete(preceptorForm);
		return ResponseEntity.ok().build();
	}
}