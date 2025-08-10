// filepath: /Users/meghankeenan/Desktop/Meg-Connections/src/components/modals/NoMoreSetsModal.js
import React from "react";
import BaseModal from "./BaseModal";
import Button from "../ui/button";

function NoMoreSetsModal({ open, onClose }) {
  return (
    <BaseModal
      title="That's All, Come Back Next Year!!"
      open={open}
      onClose={onClose}
      showActionButton={false}
      footerElements={[
        <Button
          key="home"
          onClick={() => window.location.href = "/"}
          className="px-4 py-2 bg-black text-white rounded font-bold hover:bg-gray-800"
        >
          Home
        </Button>,
      ]}
    >
      <div style={{ textAlign: "center", fontSize: "1.5rem" }}>
        Happy Birthday Meg ❤️❤️
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="https://i.postimg.cc/7ZBgqVgT/Screenshot-2025-07-13-at-19-01-55.png"
            alt="Birthday Meg"
            style={{ marginTop: "1rem", maxWidth: "250px", width: "100%", borderRadius: "14px" }}
          />
        </div>
      </div>
    </BaseModal>
  );
}

export default NoMoreSetsModal;