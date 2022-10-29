/** @format */

import { InputText } from "../../../../components/InputText";
import { AddressFormContainer, FormSecondSection } from "./styles";

export function AddressForm() {
  return (
    <AddressFormContainer>
      <InputText placeholder="CEP" />
      <InputText placeholder="RUA" customSize="max" />
      <FormSecondSection>
        <InputText placeholder="Número" />
        <InputText placeholder="Complemento" isOptional customSize="lg" />
        <InputText placeholder="Bairro" />
        <InputText placeholder="Cidade" customSize="md" />
        <InputText placeholder="UF" customSize="xs" />
      </FormSecondSection>
    </AddressFormContainer>
  );
}
