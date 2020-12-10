type Props = {
  price: number;
};

const FormattedPrice = ({ price }: Props) => {
  const formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");

  return <>€ {formattedPrice}</>;
};

export default FormattedPrice;
