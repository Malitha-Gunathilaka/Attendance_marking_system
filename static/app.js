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
                    <select class="form-control" id="class_name" required>
                        <option value="Maths">Maths</option>
                        <option value="Science">Science</option>
                        <option value="English">English</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Add Student</button>
            </form>
        `;

        document.getElementById('add-student-form').addEventListener('submit', function(event) {
            event.preventDefault();
            addStudent();
        });
    }

    function loadUpdateStudentForm() {
        mainContent.innerHTML = `
            <h2>Update Student</h2>
            <form id="update-student-form">
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
                <button type="submit" class="btn btn-primary">Update Student</button>
            </form>
        `;

        document.getElementById('update-student-form').addEventListener('submit', function(event) {
            event.preventDefault();
            updateStudent();
        });
    }

    function loadDeleteStudentForm() {
        mainContent.innerHTML = `
            <h2>Delete Student</h2>
            <form id="delete-student-form">
                <div class="form-group">
                    <label for="stu_id">Student ID</label>
                    <input type="text" class="form-control" id="stu_id" required>
                </div>
                <button type="submit" class="btn btn-danger">Delete Student</button>
            </form>
        `;

        document.getElementById('delete-student-form').addEventListener('submit', function(event) {
            event.preventDefault();
            deleteStudent();
        });
    }

    function loadMarkAttendanceForm() {
        mainContent.innerHTML = `
            <h2>Mark Attendance</h2>
            <form id="mark-attendance-form">
                <div class="form-group">
                    <label for="stu_id">Student ID</label>
                    <input type="text" class="form-control" id="stu_id" required>
                </div>
                <div class="form-group">
                    <label for="date">Date</label>
                    <input type="date" class="form-control" id="date" required>
                </div>
                <div class="form-group">
                    <label for="class_name">Class</label>
                    <select class="form-control" id="class_name" required>
                        <option value="Maths">Maths</option>
                        <option value="Science">Science</option>
                        <option value="English">English</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="status">Status</label>
                    <select class="form-control" id="status" required>
                        <option value="1">Present</option>
                        <option value="0">Absent</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Mark Attendance</button>
            </form>
        `;

        document.getElementById('mark-attendance-form').addEventListener('submit', function(event) {
            event.preventDefault();
            markAttendance();
        });
    }

    function loadViewAttendanceForm() {
        mainContent.innerHTML = `
            <h2>View Attendance</h2>
            <form id="view-attendance-form">
                <div class="form-group">
                    <label for="stu_id">Student ID</label>
                    <input type="text" class="form-control" id="stu_id" required>
                </div>
                <button type="submit" class="btn btn-primary">View Attendance</button>
            </form>
            <div id="attendance-records" class="mt-4">
                <!-- Attendance records will be displayed here -->
            </div>
        `;

        document.getElementById('view-attendance-form').addEventListener('submit', function(event) {
            event.preventDefault();
            viewAttendance();
        });
    }

    function loadGenerateReportForm() {
        mainContent.innerHTML = `
            <h2>Generate Report</h2>
            <form id="generate-report-form">
                <div class="form-group">
                    <label for="class_name">Class</label>
                    <select class="form-control" id="class_name" required>
                        <option value="Maths">Maths</option>
                        <option value="Science">Science</option>
                        <option value="English">English</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Generate Report</button>
            </form>
            <div id="report" class="mt-4">
                <!-- Report will be displayed here -->
            </div>
        `;

        document.getElementById('generate-report-form').addEventListener('submit', function(event) {
            event.preventDefault();
            generateReport();
        });
    }

    async function addStudent() {
        const stuId = document.getElementById('stu_id').value;
        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;
        const address = document.getElementById('address').value;
        const phoneNumber = document.getElementById('phone_number').value;
        const email = document.getElementById('email').value;
        const className = document.getElementById('class_name').value;

        try {
            await axios.post('/students', {
                stu_id: stuId,
                first_name: firstName,
                last_name: lastName,
                address: address,
                phone_number: phoneNumber,
                email: email,
                class_name: className
            });
            alert('Student added successfully');
            document.getElementById('add-student-form').reset();
        } catch (error) {
            console.error('There was an error adding the student!', error);
            alert('Failed to add student');
        }
    }

    async function updateStudent() {
        const stuId = document.getElementById('stu_id').value;
        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;
        const address = document.getElementById('address').value;
        const phoneNumber = document.getElementById('phone_number').value;
        const email = document.getElementById('email').value;

        try {
            await axios.put(`/students/${stuId}`, {
                first_name: firstName,
                last_name: lastName,
                address: address,
                phone_number: phoneNumber,
                email: email
            });
            alert('Student updated successfully');
            document.getElementById('update-student-form').reset();
        } catch (error) {
            console.error('There was an error updating the student!', error);
            alert('Failed to update student');
        }
    }

    async function deleteStudent() {
        const stuId = document.getElementById('stu_id').value;

        try {
            await axios.delete(`/students/${stuId}`);
            alert('Student deleted successfully');
            document.getElementById('delete-student-form').reset();
        } catch (error) {
            console.error('There was an error deleting the student!', error);
            alert('Failed to delete student');
        }
    }

    async function markAttendance() {
        const stuId = document.getElementById('stu_id').value;
        const date = document.getElementById('date').value;
        const className = document.getElementById('class_name').value;
        const status = document.getElementById('status').value;

        try {
            await axios.post('/attendance', {
                stu_id: stuId,
                date: date,
                class_name: className,
                status: status
            });
            alert('Attendance marked successfully');
            document.getElementById('mark-attendance-form').reset();
        } catch (error) {
            console.error('There was an error marking attendance!', error);
            alert('Failed to mark attendance');
        }
    }

    async function viewAttendance() {
        const stuId = document.getElementById('stu_id').value;

        try {
            const response = await axios.get(`/attendance/${stuId}`);
            const records = response.data;
            const attendanceRecords = document.getElementById('attendance-records');
            attendanceRecords.innerHTML = `
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Class</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${records.map(record => `
                            <tr>
                                <td>${record.date}</td>
                                <td>${record.class_name}</td>
                                <td>${record.status ? 'Present' : 'Absent'}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        } catch (error) {
            console.error('There was an error retrieving the attendance records!', error);
            alert('Failed to retrieve attendance records');
        }
    }

    async function generateReport() {
        const className = document.getElementById('class_name').value;

        try {
            const response = await axios.get(`/attendance/report/${className}`);
            const reportData = response.data;
            const reportDiv = document.getElementById('report');
            reportDiv.innerHTML = `
                <h3>Attendance Report for ${className}</h3>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Total Classes</th>
                            <th>Classes Attended</th>
                            <th>Attendance Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${reportData.map(record => `
                            <tr>
                                <td>${record.stu_id}</td>
                                <td>${record.name}</td>
                                <td>${record.total_classes}</td>
                                <td>${record.classes_attended}</td>
                                <td>${(record.classes_attended / record.total_classes * 100).toFixed(2)}%</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `;
        } catch (error) {
            console.error('There was an error generating the report!', error);
            alert('Failed to generate report');
        }
    }
});
