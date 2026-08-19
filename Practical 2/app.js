function StudentRegistration() {

    // =========================
    // Controlled Form State
    // =========================

    const [student, setStudent] = React.useState({

        name: "",
        email: "",
        mobile: "",
        dob: "",
        gender: "",
        course: "",
        address: ""

    });


    // =========================
    // Handle Input Changes
    // =========================

    function handleChange(event) {

        const { name, value } = event.target;

        setStudent({

            ...student,

            [name]: value

        });

    }


    // =========================
    // Handle Form Submission
    // =========================

  function handleSubmit(event) {

    event.preventDefault();

    fetch("/register", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(student)

    })

    .then(response => response.json())

    .then(data => {

        alert(data.message);

        if (data.message === "Student registered successfully!") {

            handleReset();

        }

    })

    .catch(error => {

        console.error("Error:", error);

        alert("Failed to register student.");

    });

}


    // =========================
    // Reset Form
    // =========================

    function handleReset() {

        setStudent({

            name: "",
            email: "",
            mobile: "",
            dob: "",
            gender: "",
            course: "",
            address: ""

        });

    }


    // =========================
    // View
    // =========================

    return (

        <div className="container">

            <h1>🎓 Student Registration Portal</h1>

            <p className="subtitle">
                Form Handling Using Controlled Components
            </p>


            <form onSubmit={handleSubmit}>

                <fieldset>

                    <legend>Personal Information</legend>


                    {/* Name */}

                    <label>
                        👤 Full Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={student.name}
                        onChange={handleChange}
                        required
                    />


                    {/* Email */}

                    <label>
                        📧 Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="example@gmail.com"
                        value={student.email}
                        onChange={handleChange}
                        required
                    />


                    {/* Mobile */}

                    <label>
                        📱 Mobile Number
                    </label>

                    <input
                        type="tel"
                        name="mobile"
                        placeholder="9876543210"
                        value={student.mobile}
                        onChange={handleChange}
                        required
                    />


                    {/* DOB */}

                    <label>
                        🎂 Date of Birth
                    </label>

                    <input
                        type="date"
                        name="dob"
                        value={student.dob}
                        onChange={handleChange}
                        required
                    />


                    {/* Gender */}

                    <label>
                        ⚧ Gender
                    </label>

                    <div className="gender">

                        <label>

                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={student.gender === "Male"}
                                onChange={handleChange}
                                required
                            />

                            Male

                        </label>


                        <label>

                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={student.gender === "Female"}
                                onChange={handleChange}
                            />

                            Female

                        </label>


                        <label>

                            <input
                                type="radio"
                                name="gender"
                                value="Other"
                                checked={student.gender === "Other"}
                                onChange={handleChange}
                            />

                            Other

                        </label>

                    </div>


                    {/* Course */}

                    <label>
                        📚 Course
                    </label>

                    <select
                        name="course"
                        value={student.course}
                        onChange={handleChange}
                        required
                    >

                        <option value="">
                            Select Course
                        </option>

                        <option value="BCA">
                            BCA
                        </option>

                        <option value="BSc IT">
                            BSc IT
                        </option>

                        <option value="BCom">
                            BCom
                        </option>

                        <option value="B.Tech CSE">
                            B.Tech CSE
                        </option>

                    </select>


                    {/* Address */}

                    <label>
                        🏠 Address
                    </label>

                    <textarea
                        name="address"
                        rows="4"
                        placeholder="Enter your address"
                        value={student.address}
                        onChange={handleChange}
                        required
                    ></textarea>

                </fieldset>


                <div className="buttons">

                    <input
                        type="submit"
                        value="Register"
                    />

                    <input
                        type="reset"
                        value="Reset"
                        onClick={handleReset}
                    />

                </div>

            </form>

        </div>

    );

}


// =========================
// Render React Component
// =========================

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <StudentRegistration />
);