package com.SquirrelMaster.preceptor_point_website.Controller;

import com.SquirrelMaster.preceptor_point_website.StudentForm;
import com.SquirrelMaster.preceptor_point_website.StudentFormRepository;
import com.SquirrelMaster.preceptor_point_website.Exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class StudentFormController {
	@Autowired
	StudentFormRepository studentFormRepository;

	@CrossOrigin(origins = "http://localhost:3000")
	// Get All studentForm
	@GetMapping("/student")
	public List<StudentForm> getAllStudentForm() {
		return studentFormRepository.findAll();
	}

	@CrossOrigin(origins = "http://localhost:3000")
	// Create a new studentForm
	@PostMapping("/student")
	public StudentForm createStudentForm(@Valid @RequestBody StudentForm studentForm) {
		return studentFormRepository.save(studentForm);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	// Get a Single studentForm
	@GetMapping("/student/{id}")
	public StudentForm getStudentFormById(@PathVariable(value = "id") Long studentFormId) {
		return studentFormRepository.findById(studentFormId)
				.orElseThrow(() -> new ResourceNotFoundException("StudentForm", "id", studentFormId));
	}

	@CrossOrigin(origins = "http://localhost:3000")
	// Update a studentForm
	@PutMapping("/student/{id}")
	public StudentForm updateStudentForm(@PathVariable(value = "id") Long studentFormId,
			@Valid @RequestBody StudentForm studentFormDetails) {
		StudentForm studentForm = studentFormRepository.findById(studentFormId)
				.orElseThrow(() -> new ResourceNotFoundException("StudentForm", "id", studentFormId));
		studentForm.setFirstName(studentFormDetails.getFirstName());
		studentForm.setLastName(studentFormDetails.getLastName());
		studentForm.setStreetAddress(studentFormDetails.getStreetAddress());
		studentForm.setStreetAddress2(studentFormDetails.getStreetAddress2());
		studentForm.setCity(studentFormDetails.getCity());
		studentForm.setState(studentFormDetails.getState());
		studentForm.setZip(studentFormDetails.getZip());
		studentForm.setWillingToTravel(studentFormDetails.getWillingToTravel());
		studentForm.setSpecialtyNeeded(studentFormDetails.getSpecialtyNeeded());
		studentForm.setHoursNeeded(studentFormDetails.getHoursNeeded());
		studentForm.setResume(studentFormDetails.getResume());
		studentForm.setHowDidYouHearAboutUs(studentFormDetails.getHowDidYouHearAboutUs());
		StudentForm updatedStudentForm = studentFormRepository.save(studentForm);
		return updatedStudentForm;
	}

	@CrossOrigin(origins = "http://localhost:3000")
	// Delete a StudentForm
	@DeleteMapping("/student/{id}")
	public ResponseEntity<?> deleteStudentForm(@PathVariable(value = "id") Long studentFormId) {
		StudentForm studentForm = studentFormRepository.findById(studentFormId)
				.orElseThrow(() -> new ResourceNotFoundException("StudentForm", "id", studentFormId));
		studentFormRepository.delete(studentForm);
		return ResponseEntity.ok().build();
	}
}