function StudentRegistration() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [mobile, setMobile] = React.useState("");
    const [dob, setDob] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [course, setCourse] = React.useState("");
    const [address, setAddress] = React.useState("");


function handleSubmit(event) {

    event.preventDefault();

    const student = {
        name: name,
        email: email,
        mobile: mobile,
        dob: dob,
        gender: gender,
        course: course,
        address: address
    };

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

            setName("");
            setEmail("");
            setMobile("");
            setDob("");
            setGender("");
            setCourse("");
            setAddress("");

        }

    })

    .catch(error => {

        console.error("Error:", error);

        alert("Failed to register student.");

    });

}

    return (

        <div className="container">

            <h1>🎓 Student Registration Portal</h1>

            <p className="subtitle">
                Please fill in your details below.
            </p>


            <form onSubmit={handleSubmit}>

                <fieldset>

                    <legend>Personal Information</legend>


                    {/* Name */}

                    <label>👤 Full Name</label>

                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(event) =>
                            setName(event.target.value)
                        }
                        required
                    />


                    {/* Email */}

                    <label>📧 Email</label>

                    <input
                        type="email"
                        placeholder="example@gmail.com"
                        value={email}
                        onChange={(event) =>
                            setEmail(event.target.value)
                        }
                        required
                    />


                    {/* Mobile */}

                    <label>📱 Mobile Number</label>

                    <input
                        type="tel"
                        placeholder="9876543210"
                        value={mobile}
                        onChange={(event) =>
                            setMobile(event.target.value)
                        }
                        required
                    />


                    {/* Date of Birth */}

                    <label>🎂 Date of Birth</label>

                    <input
                        type="date"
                        value={dob}
                        onChange={(event) =>
                            setDob(event.target.value)
                        }
                        required
                    />


                    {/* Gender */}

                    <label>⚧ Gender</label>

                    <div className="gender">

                        <label>

                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={gender === "Male"}
                                onChange={(event) =>
                                    setGender(event.target.value)
                                }
                                required
                            />

                            Male

                        </label>


                        <label>

                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={gender === "Female"}
                                onChange={(event) =>
                                    setGender(event.target.value)
                                }
                            />

                            Female

                        </label>


                        <label>

                            <input
                                type="radio"
                                name="gender"
                                value="Other"
                                checked={gender === "Other"}
                                onChange={(event) =>
                                    setGender(event.target.value)
                                }
                            />

                            Other

                        </label>

                    </div>


                    {/* Course */}

                    <label>📚 Course</label>

                    <select
                        value={course}
                        onChange={(event) =>
                            setCourse(event.target.value)
                        }
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

                    <label>🏠 Address</label>

                    <textarea
                        rows="4"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(event) =>
                            setAddress(event.target.value)
                        }
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
                        onClick={() => {
                            setName("");
                            setEmail("");
                            setMobile("");
                            setDob("");
                            setGender("");
                            setCourse("");
                            setAddress("");
                        }}
                    />

                </div>


            </form>

        </div>

    );
}


const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <StudentRegistration />
);