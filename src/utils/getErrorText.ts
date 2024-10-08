type ErrorProp = {
  errorName: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
};

export function getErrorText({ errorName, setError }: ErrorProp) {
  switch (errorName) {
    case "Request failed with status code 403":
      setError("Лимит запросов превышен, попробуйте позже");
      break;
    case "Request failed with status code 422":
      setError("Запрос не удался, попробуйте ввести другие параметры");
      break;
    case "Service unavailable":
      setError("Сервис не доступен, попробуйте позже");
      break;
    default:
      setError("Что-то пошло не так");
      break;
  }
}
