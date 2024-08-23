import Icon from '../../assets/images/Icon.png';

const Footer = () => {
  const newPageGithub = () => {
    window.open('https://github.com/MedicineWeb/MedicineWeb');
  };

  return (
    <div className="flex flex-row items-center justify-end w-auto px-2 text-sm bg-blue-100 h-14">
      <div className="text-xs text-right text-medicineFontBlue">
        ⓒ 2024. Team.medicineWeb. All rights reserved. <br />
      </div>
      <img
        src={Icon}
        alt="medicineWeb"
        className="w-8 pb-1 cursor-pointer"
        onClick={newPageGithub}
      />
    </div>
  );
};

export default Footer;
