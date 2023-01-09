export function useCounter(iniNum: number) {
  const count = ref(iniNum);
  const inc = () => count.value++;
  const dec = () => count.value--;
  return {
    count,
    inc,
    dec,
  };
}
