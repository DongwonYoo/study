import ModalBtn from "./ModalBtn";

const Page = ({ showModal }) => {
  return (
    <div>
      <ModalBtn onClick={showModal} />
    </div>
  );
};
export default Page;
