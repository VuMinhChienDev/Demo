function logger(reducer) {
  return (prevState, action) => {
    console.group(action.type); // Mở một nhóm log mới
    console.log('Trạng thái trước:', prevState);
    console.log('Hành động:', action);

    const newState = reducer(prevState, action);

    console.log('Trạng thái sau:', newState);
    console.groupEnd(); // Kết thúc nhóm log

    return newState; // Trả về trạng thái mới
  };
}

export default logger;
