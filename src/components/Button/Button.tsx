interface Props {
  text: string;
  onClick?: () => void; // Optional onClick handler
}

function Button({ text, onClick }: Props) {
  return (
    <div>
      <button
        className="p-4 bg-[#0388B4] text-white rounded-[2.25rem] min-w-40 text-center text-[1.75rem] font-semibold"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;