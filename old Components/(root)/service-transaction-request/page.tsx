"use client";
import NormalContent from "@/app/components/ContentTemplate/NormalContent";
import PageNotFound from "@/app/components/PageNotFound";
import TransactionList from "@/app/components/Transactions/TransactionList";
import TransactionWrapper from "@/app/components/Transactions/TransactionWrapper";
import { useTransactions } from "@/app/context/transactions/TransactionsContext";
import { useUsers } from "@/app/context/users/UsersContext";
import React, { useEffect } from "react";

const TransactionRequest = () => {
  const { loggedInUser } = useUsers();
  const { fetchServiceTransactionRequest, error } = useTransactions();

  useEffect(() => {
    fetchServiceTransactionRequest(loggedInUser.userId);
  }, []);

  if (error) {
    return (
      <NormalContent>
        <PageNotFound image_url="/img/page-not-found.png" message="" />
      </NormalContent>
    );
  }

  return (
    <NormalContent>
      <TransactionWrapper>
        <div className="border-b-2 border-slate-200 pb-2 mb-4">
          <h1 className="text-4xl font-bold">Transaction Request</h1>
        </div>
        <TransactionList transactionType="serviceReq" />
      </TransactionWrapper>
    </NormalContent>
  );
};

export default TransactionRequest;
