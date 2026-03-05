import profileImg from "./anim.png";

export function Profile_Contact() {
  return (
    <div className="flex justify-end pr-30">
      <img 
        src={profileImg}
        alt="Seinal Arifin"
        className="w-64 md:w-90"
      />
    </div>
  );
}