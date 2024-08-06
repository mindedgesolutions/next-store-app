import { Prisma } from "@prisma/client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

type PriceInputProps = {
  label?: string;
  placeholder?: string;
  defaultValue?: string;
};

const PriceInput = ({ label, placeholder, defaultValue }: PriceInputProps) => {
  const name = Prisma.ProductScalarFieldEnum.price;

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input
        id={name}
        name={name}
        type="number"
        defaultValue={defaultValue || 100}
        placeholder={placeholder}
        min={0}
        required
      />
    </div>
  );
};
export default PriceInput;
