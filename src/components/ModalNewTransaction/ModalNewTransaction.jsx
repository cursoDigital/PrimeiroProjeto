'use client'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import ModalButtonUp from "../ModalButton/ModalButtonUp";
import ModalButtonDown from "../ModalButton/ModalButtonDown";
import ModalTitle from "../InputsModal/ModalTitle";
import ModalPrice from "../InputsModal/ModalPrice";
import ModalCategory from "../InputsModal/ModalCategory";
import ButtonGreen from "../Button/ButtonGreen";

export default function ModalNewTransaction() {
  const [open, setOpen] = useState(true)
  
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    Cadastrar transação
                  </DialogTitle>
                  <div className="mt-2 w-full">
                    <ModalTitle></ModalTitle>
                    <ModalPrice></ModalPrice>
                  </div>
                  <div className='flex w-full justify-end'>
                    <ModalButtonUp icon={<ArrowCircleUp className="text-green-500 h-6" size={32} />}></ModalButtonUp>
                    <ModalButtonDown icon={<ArrowCircleDown className="text-red-500 h-6" size={32} />}></ModalButtonDown>
                  </div>
                  <div>
                    <ModalCategory></ModalCategory>
                    <ButtonGreen></ButtonGreen>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
