import React from "react";
import Marquee from "react-fast-marquee";

const organizations = [
  {
    name: "DESCO",
    logo: "https://i.postimg.cc/pLhMNxxQ/DESCO.jpg",
  },
  {
    name: "NESCO",
    logo: "https://i.postimg.cc/8CN4RByF/NESCO.png",
  },
  {
    name: "PDB",
    logo: "https://i.postimg.cc/DZYcKV7s/PDB.png",
  },
  {
    name: "Polli Biddut",
    logo: "https://i.postimg.cc/sfqtpq5v/Polli-biddut.png",
  },
  {
    name: "WASA",
    logo: "https://i.postimg.cc/mgGJn9X4/WASA.jpg",
  },
  {
    name: "TITAS",
    logo: "https://i.postimg.cc/nzMPmGz4/titas.png",
  },
  {
    name: "TeleTalk",
    logo: "https://i.postimg.cc/9X6n4Tj9/teletalk.png",
  },
];

const WorksWith = () => {
  return (
    <div className="my-24">
        <div className="text-center mb-14">
            <h1 className="text-xl md:text-3xl text-[#0c2f54] font-bold">Organizations we work with</h1>
        </div>
      <Marquee pauseOnHover='true'>
        {
            organizations.map((organization) => (
                <div className="">
                    <img className="w-28 mx-10" src={organization.logo} alt="" />
                </div>
            ))
        }
      </Marquee>
    </div>
  );
};

export default WorksWith;
