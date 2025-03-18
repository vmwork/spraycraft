export default () => {
  const documentBody = document?.getElementsByTagName('body')[0];
  const enableScroll = () => {
    documentBody.style.overflow = null;
    // documentBody.style.position = null;
  };
  const disableScroll = () => {
    documentBody.style.overflow = 'hidden';
    // documentBody.style.position = 'fixed';
  };
  return { enableScroll, disableScroll };
};
