import React from "react";

import PageWrapper from "@/common/components/PageWrapper";
import Layout from "@/common/components/layouts/Layout";
import Payment from "@/modules/payment";
import { NextSeo } from "next-seo";

const PaymentPage = () => {
  return (
    <Layout>
      <NextSeo title="PAY" />
      <PageWrapper>
        <Payment />
      </PageWrapper>
    </Layout>
  );
};

export default PaymentPage;
