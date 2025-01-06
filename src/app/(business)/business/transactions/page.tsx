import BusinessTransactionHero from "@/widgets/pages/(business)/transactions/BusinessTransactionsHero";
import TransactionChannel from "@/widgets/pages/(business)/transactions/TransactionChannel";
import TransactionConvert from "@/widgets/pages/(business)/transactions/TransactionConvert";
import TransactionPayment from "@/widgets/pages/(business)/transactions/TransactionPayment";
import TransactionsCurrency from "@/widgets/pages/(business)/transactions/TransactionsCurrency";

const Page = () => {
  return (
    <section className="w-full">
      <BusinessTransactionHero />
      <TransactionPayment />
      <TransactionsCurrency />
      <TransactionConvert />
      <TransactionChannel />
    </section>
  );
};

export default Page;
