/** @format */

import {
  BulletIndicator,
  ConfirmedOrderContainer,
  ConfirmedOrderHeader,
  DeliveryInformationsContainer,
  DeliveryInformationsContent,
  DetailsDeliveryContainer,
  HeaderText,
} from "./styles";

import confirmedImage from "../../assets/confirmed-order-img.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function ConfirmedOrder() {
  return (
    <ConfirmedOrderContainer>
      <ConfirmedOrderHeader>
        <HeaderText>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </HeaderText>
        <DeliveryInformationsContainer>
          <DeliveryInformationsContent>
            <DetailsDeliveryContainer>
              <BulletIndicator backgroundColor="brandPurple">
                <MapPin size={16} weight="fill" />
              </BulletIndicator>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{" "}
                Farrapos - Porto Alegre, RS
              </p>
            </DetailsDeliveryContainer>
            <DetailsDeliveryContainer>
              <BulletIndicator backgroundColor="brandYellow">
                <Timer size={16} weight="fill" />
              </BulletIndicator>
              <p>
                Previsão de entrega <strong>20 min - 30 min</strong>
              </p>
            </DetailsDeliveryContainer>
            <DetailsDeliveryContainer>
              <BulletIndicator backgroundColor="yellowDark">
                <CurrencyDollar size={16} />
              </BulletIndicator>
              <p>
                Pagamento na entrega <strong>Cartão de Crédito</strong>
              </p>
            </DetailsDeliveryContainer>
          </DeliveryInformationsContent>
        </DeliveryInformationsContainer>
      </ConfirmedOrderHeader>
      <img
        src={confirmedImage}
        alt="Um homem negro andando em cima de uma moto em movimento"
      />
    </ConfirmedOrderContainer>
  );
}
