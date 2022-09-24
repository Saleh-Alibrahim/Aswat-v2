import Swal from 'sweetalert2';
import { ReactSweetAlert } from 'sweetalert2-react-content';

export const successAlertTimer = async (swal: ReactSweetAlert, msg: string) => {
  await swal.fire({
    icon: 'success',
    text: msg,
    timer: 1500,
    heightAuto: false,
    showConfirmButton: false,
  });
};

export const errorAlert = async (swal: ReactSweetAlert, msg: string) => {
  await swal.fire({
    icon: 'error',
    heightAuto: false,
    text: msg || 'خطأ في السيرفر',
    confirmButtonText: 'المحاولة مرة اخرى',
    confirmButtonColor: '#00bfd8',
  });
};
