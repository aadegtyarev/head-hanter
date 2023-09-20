export default function useSendEmails() {
  const sendTestDoc = async (email, job_title, test_doc_text) => {
    try {
      const subject = `Тестовое задание на вакансию ` + job_title;
      const body = test_doc_text;
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const sendInterviewMail = async (email, job_title) => {
    try {
      const subject = `Приглашение на интервью, вакансия ` + job_title;
      const body = `Приглашаем пройти интервью в Zoom.`;
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  return {
    sendTestDoc,
    sendInterviewMail,
  };
}
