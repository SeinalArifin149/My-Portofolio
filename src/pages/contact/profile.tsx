import profileImg from "./anim.png";

export function Profile_Contact() {
  return (
    <div className="flex justify-center md:justify-end">
      <img
        src={profileImg}
        alt="Seinal Arifin"
        className="w-64 md:w-85"
      />
    </div>
  );
}