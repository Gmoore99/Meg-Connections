import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../ui/alert-dialog";

function BaseModal({
  open,
  onClose,
  title = "title",
  trigger = undefined,
  footerElements,
  children,
  actionButtonText = "Continue",
  showActionButton = true,
  titleClassName = "",
}) {
  function handleCloseEvent() {
    if (onClose) onClose();
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
      onClick={handleCloseEvent}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <AlertDialog open={open} onOpenChange={(val) => !val && handleCloseEvent()}>
          {!!trigger && <AlertDialogTrigger>{trigger}</AlertDialogTrigger>}
          <AlertDialogContent
            handleMouseDownOnOverlay={handleCloseEvent}
            onEscapeKeyDown={handleCloseEvent}
            onCloseAutoFocus={(e) => {
              e.preventDefault();
            }}
          >
            <AlertDialogHeader>
              <h2 className={`modal-title ${titleClassName}`}>{title}</h2>
              <AlertDialogDescription>{children}</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              {footerElements}
              {showActionButton && (
                <AlertDialogAction onClick={handleCloseEvent}>
                  {actionButtonText}
                </AlertDialogAction>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}

export default BaseModal;
