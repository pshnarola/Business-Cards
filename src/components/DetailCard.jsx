import img1 from "../assets/img1.png";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.jpeg";
import PropTypes from "prop-types";

const DetailCard = ({ profile, field }) => {
  return (
    <div className="grid grid-cols-12 mt-[1.75rem]">
      <div className="col-span-3">
        <h3 className="text-md italic text-slate-800 text-left">{field}</h3>
      </div>
      <div className="col-span-9 flex flex-col">
        {profile?.map((exp, index) => (
          <div key={index} className="space-x-1 pl-6 md:p-0">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-gray-200"></div>
              <img
                src={
                  profile.length !== 1
                    ? profile.length !== index + 1
                      ? img1
                      : img2
                    : img3
                }
                alt="Degree"
                className="rounded-full h-6 w-6"
              />
              <div style={{ width: "calc(100% - 5.5rem)" }}>
                <p className="overflow-hidden whitespace-nowrap overflow-ellipsis text-left font-normal text-gray-700 text-md">
                  {exp}
                </p>
              </div>
            </div>
            {profile.length !== index + 1 && (
              <div className="border-l-[2px] h-4 border-solid border-gray-200"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailCard;

DetailCard.propTypes = {
  profile: PropTypes.any,
  field: PropTypes.any,
};
