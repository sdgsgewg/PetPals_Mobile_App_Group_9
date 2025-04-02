// import { ThemeProvider } from "next-themes";
import React from "react";
import { PetsProvider } from "./context/pets/PetsContext";
import { ServicesProvider } from "./context/services/ServicesContext";
import { GlobalProvider } from "./context/GlobalContext";
import { UserProvider } from "./context/users/UsersContext";
import { AdoptionsProvider } from "./context/adoptions/AdoptionsContext";
import { ForumsProvider } from "./context/forums/ForumsContext";
import { TransactionsProvider } from "./context/transactions/TransactionsContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalProvider>
      <UserProvider>
        <PetsProvider>
          <AdoptionsProvider>
            <ServicesProvider>
              <TransactionsProvider>
                <ForumsProvider>{children}</ForumsProvider>
              </TransactionsProvider>
            </ServicesProvider>
          </AdoptionsProvider>
        </PetsProvider>
      </UserProvider>
    </GlobalProvider>
  );
};

export default Providers;
