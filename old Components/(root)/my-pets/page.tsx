"use client";
import NormalContent from "@/app/components/ContentTemplate/NormalContent";
import ItemNotFound from "@/app/components/ItemNotFound";
import Header from "@/app/components/ManageItem/Header";
import MyPetTable from "@/app/components/ManageItem/MyPetTable";
import PageNotFound from "@/app/components/PageNotFound";
import { usePets } from "@/app/context/pets/PetsContext";
import { useUsers } from "@/app/context/users/UsersContext";
import Loading from "@/app/loading";
import React, { useEffect } from "react";

const MyPets = () => {
  const { loggedInUser } = useUsers();
  const { ownerPets, fetchOwnerPets, error, loading } = usePets();

  useEffect(() => {
    fetchOwnerPets(loggedInUser.userId);
  }, []);

  if (error) {
    return (
      <NormalContent>
        <PageNotFound image_url="/img/page-not-found.png" message="" />
      </NormalContent>
    );
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <NormalContent>
            <div className="w-full max-w-lg sm:max-w-2xl md:max-w-5xl lg:max-w-7xl mx-auto">
              <Header
                title="My Pets"
                redirectUrl="/adoptions/new"
                addText="Add New Pet"
              />
              {ownerPets.length > 0 ? (
                <MyPetTable />
              ) : (
                <ItemNotFound
                  image_url="/img/pet-not-found.png"
                  size={200}
                  message="Pet Not Found"
                />
              )}
            </div>
          </NormalContent>
        </>
      )}
    </>
  );
};

export default MyPets;
