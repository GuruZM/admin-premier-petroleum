import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Divider } from '@nextui-org/react'

function AddModal({ isOpen, onOpenChange, children,isSubmitting,buttonSection,title} ) {
  return (
    <Modal 
    isOpen={isOpen} 
    onOpenChange={onOpenChange}
    placement="center"
  >
   <ModalContent>
    {(onClose) => (
      <>
        <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
        <Divider />
        <ModalBody >
            {children}
        </ModalBody>
               
              {/* <ModalFooter>

              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
  )
}

export default AddModal