import { faker } from "@faker-js/faker";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CheckboxInput from "@/components/form/CheckBoxInput";
import SubmitButton from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContainer";
import { createProductAction } from "@/utils/actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Create New Product | ${process.env.NEXT_PUBLIC_APP_TITLE}`,
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quas deleniti ex quam assumenda minus ducimus porro iusto tempora aut, accusantium possimus voluptatum dolore officia optio rem earum ea quia.",
};

const CreateProduct = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 4, max: 5 });

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">create product</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <FormInput
              name="name"
              type="text"
              label="Enter product name"
              defaultValue={name}
              placeholder="Enter product value"
            />
            <FormInput
              name="company"
              type="text"
              label="Enter company name"
              defaultValue={company}
              placeholder="Enter company value"
            />
            <PriceInput
              label="Enter product price"
              placeholder="Enter product price"
            />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            defaultValue={description}
            labelText="Enter product description"
          />

          <div className="mt-6">
            <CheckboxInput
              label="Is featured?"
              name="isFeatured"
              defaultChecked={false}
            />
          </div>
          <SubmitButton />
        </FormContainer>
      </div>
    </section>
  );
};
export default CreateProduct;
