document.addEventListener("DOMContentLoaded", function() {
    const mainContent = document.getElementById('main-content');

    document.getElementById('add-student-link').addEventListener('click', loadAddStudentForm);
    document.getElementById('update-student-link').addEventListener('click', loadUpdateStudentForm);
    document.getElementById('delete-student-link').addEventListener('click', loadDeleteStudentForm);
    document.getElementById('mark-attendance-link').addEventListener('click', loadMarkAttendanceForm);
    document.getElementById('view-attendance-link').addEventListener('click', loadViewAttendanceForm);
    document.getElementById('generate-report-link').addEventListener('click', loadGenerateReportForm);

    // Load the add student form by default
    loadAddStudentForm();

    function loadAddStudentForm() {
        mainContent.innerHTML = `
            <h2>Add Student</h2>
            <form id="add-student-form">
                <div class="form-group">
                    <label for="stu_id">Student ID</label>
                    <input type="text" class="form-control" id="stu_id" required>
                </div>
                <div class="form-group">
                    <label for="first_name">First Name</label>
                    <input type="text" class="form-control" id="first_name" required>
                </div>
                <div class="form-group">
                    <label for="last_name">Last Name</label>
                    <input type="text" class="form-control" id="last_name" required>
                </div>
                <div class="form-group">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" required>
                </div>
                <div class="form-group">
                    <label for="phone_number">Phone Number</label>
                    <input type="text" class="form-control" id="phone_number" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="class_name">Class</label>
                    <input type="text" class="form-control" id="class_name" required>
                </div>
                <button type="submit" class="btn btn-primary">Add Student</button>
            </form>
        `;

        document.getElementById('add-student-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const data = {
                stu_id: document.getElementById('stu_id').value,
                first_name: document.getElementById('first_name').value,
                last_name: document.getElementById('last_name').value,
                address: document.getElementById('address').value,
                phone_number: document.getElementById('phone_number').value,
                email: document.getElementById('email').value,
                class_name: document.getElementById('class_name').value
            };
            axios.post('/students', data)
                .then(response => {
                    alert('Student added successfully!');
                    document.getElementById('add-student-form').reset();
                })
                .catch(error => {
                    alert('Error adding student: ' + error.response.data.message);
                });
        });
    }

    function loadUpdateStudentForm() {
        mainContent.innerHTML = `
            <h2>Update Student</h2>
            <form id="update-student-form">
                <div class="form-group">
                    <label for="update_stu_id">Student ID</label>
                    <input type="text" class="form-control" id="update_stu_id" required>
                </div>
                <div class="form-group">
                    <label for="update_first_name">First Name</label>
                    <input type="text" class="form-control" id="update_first_name" required>
                </div>
                <div class="form-group">
                    <label for="update_last_name">Last Name</label>
                    <input type="text" class="form-control" id="update_last_name" required>
                </div>
                <div class="form-group">
                    <label for="update_address">Address</label>
                    <input type="text" class="form-control" id="update_address" required>
                </div>
                <div class="form-group">
                    <label for="update_phone_number">Phone Number</label>
                    <input type="text" class="form-control" id="update_phone_number" required>
                </div>
                <div class="form-group">
                    <label for="update_email">Email</label>
                    <input type="email" class="form-control" id="update_email">
                </div>
                <div class="form-group">
                    <label for="update_class_name">Class</label>
                    <input type="text" class="form-control" id="update_class_name" required>
                </div>
                <button type="submit" class="btn btn-primary">Update Student</button>
            </form>
        `;

        document.getElementById('update-student-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const stu_id = document.getElementById('update_stu_id').value;
            const data = {
                first_name: document.getElementById('update_first_name').value,
                last_name: document.getElementById('update_last_name').value,
                address: document.getElementById('update_address').value,
                phone_number: document.getElementById('update_phone_number').value,
                email: document.getElementById('update_email').value,
                class_name: document.getElementById('update_class_name').value
            };
            axios.put(`/students/${stu_id}`, data)
                .then(response => {
                    alert('Student updated successfully!');
                    document.getElementById('update-student-form').reset();
                })
                .catch(error => {
                    alert('Error updating student: ' + error.response.data.message);
                });
        });
    }

    function loadDeleteStudentForm() {
        mainContent.innerHTML = `
            <h2>Delete Student</h2>
            <form id="delete-student-form">
                <div class="form-group">
                    <label for="delete_stu_id">Student ID</label>
                    <input type="text" class="form-control" id="delete_stu_id" required>
                </div>
                <button type="submit" class="btn btn-danger">Delete Student</button>
            </form>
        `;

        document.getElementById('delete-student-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const stu_id = document.getElementById('delete_stu_id').value;
            axios.delete(`/students/${stu_id}`)
                .then(response => {
                    alert('Student deleted successfully!');
                    document.getElementById('delete-student-form').reset();
                })
                .catch(error => {
                    alert('Error deleting student: ' + error.response.data.message);
                });
        });
    }

    function loadMarkAttendanceForm() {
        mainContent.innerHTML = `
            <h2>Mark Attendance</h2>
            <form id="mark-attendance-form">
                <div class="form-group">
                    <label for="attendance_stu_id">Student ID</label>
                    <input type="text" class="form-control" id="attendance_stu_id" required>
                </div>
                <div class="form-group">
                    <label for="attendance_date">Date</label>
                    <input type="date" class="form-control" id="attendance_date" required>
                </div>
                <div class="form-group">
                    <label for="attendance_class_name">Class</label>
                    <input type="text" class="form-control" id="attendance_class_name" required>
                </div>
                <div class="form-group">
                    <label for="attendance_status">Status</label>
                    <select class="form-control" id="attendance_status" required>
                        <option value="true">Present</option>
                        <option value="false">Absent</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Mark Attendance</button>
            </form>
        `;

        document.getElementById('mark-attendance-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const data = {
                stu_id: document.getElementById('attendance_stu_id').value,
                date: document.getElementById('attendance_date').value,
                class_name: document.getElementById('attendance_class_name').value,
                status: document.getElementById('attendance_status').value
            };
            axios.post('/attendance', data)
                .then(response => {
                    alert('Attendance marked successfully!');
                    document.getElementById('mark-attendance-form').reset();
                })
                .catch(error => {
                    alert('Error marking attendance: ' + error.response.data.message);
                });
        });
    }

    function loadViewAttendanceForm() {
        mainContent.innerHTML = `
            <h2>View Attendance</h2>
            <form id="view-attendance-form">
                <div class="form-group">
                    <label for="view_stu_id">Student ID</label>
                    <input type="text" class="form-control" id="view_stu_id" required>
                </div>
                <button type="submit" class="btn btn-primary">View Attendance</button>
            </form>
            <div id="attendance-records" class="mt-4"></div>
        `;

        document.getElementById('view-attendance-form').addEventListener('submit', function(event) {
            event.preventDefault();
            const stu_id = document.getElementById('view_stu_id').value;
            axios.get(`/attendance/${stu_id}`)
                .then(response => {
                    const records = response.data;
                    if (records.length === 0) {
                        alert('No attendance records found.');
                    } else {
                        const attendanceRecordsDiv = document.getElementById('attendance-records');
                        attendanceRecordsDiv.innerHTML = '<h3>Attendance Records</h3>';
                        records.forEach(record => {
                            attendanceRecordsDiv.innerHTML += `
                                <div>
                                    Date: ${record.date} | Class: ${record.class_name} | Status: ${record.status ? 'Present' : 'Absent'}
                                </div>
                            `;
                        });
                    }
                })
                .catch(error => {
                    alert('Error fetching attendance records: ' + error.response.data.message);
                });
        });
    }
</script>
</body>
</html>
