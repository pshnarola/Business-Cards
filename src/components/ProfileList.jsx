import profilesData from "../database/profilesData.json";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/mail.svg";
import linkedInIcon from "../assets/linkedin.png";
// import img1 from "../assets/img1.png";
// import img2 from "../assets/img2.webp";
// import img3 from "../assets/img3.jpeg";
import DetailCard from "./DetailCard";

const ProfileList = () => {
  const handleMailonClick = (email) => {
    const mailtoLink = `mailto:${email}`;
    window.open(mailtoLink);
  };
  const handleCallonClick = (phoneNumber) => {
    const telLink = `tel:${phoneNumber}`;
    window.open(telLink);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 ">
      {profilesData.map((profile, index) => (
        <div
          key={index}
          className="pl-4 py-4 md:pl-8 md:py-8 border rounded-2xl hover:shadow-gray-500/40 shadow-lg"
        >
          <div className="flex space-x-4 items-center mb-2">
            <h2 className="text-2xl md:text-3xl mb-0 italic text-slate-800">
              {profile.name}
            </h2>
            <div
              className="text-gray-800 "
              onClick={() => handleCallonClick(profile.phone_number)}
            >
              <img
                src={phoneIcon}
                className="Phone"
                alt="Phone"
                height={20}
                width={20}
              />
            </div>

            <div
              className="text-gray-800 "
              onClick={() => handleMailonClick(profile.personal_email)}
            >
              <img
                src={emailIcon}
                className="email"
                alt="email"
                height={18}
                width={20}
              />
            </div>
            <div className="text-gray-800  flex space-x-4">
              <div className="border-l-2 border-solid border-gray-300"></div>

              <a href={profile.linkedIn}>
                <img
                  src={linkedInIcon}
                  className="linkedIn"
                  alt="linkedIn"
                  height={24}
                  width={24}
                />
              </a>
            </div>
          </div>
          <div className="flex space-x-2 md:space-x-4 items-center mt-1">
            <p className="text-md text-gray-900 font-normal">
              {profile.current_title}
            </p>
            <div className="h-2 w-2 rounded-full bg-gray-300"></div>

            <p className="text-gray-500 ">{profile.location}</p>
          </div>

          <div className="mt-4 border-t-2 border-solid border-gray-200 w-full"></div>
          <DetailCard profile={profile.experience} field="Experience" />
          <DetailCard profile={profile.education} field="Education" />
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
