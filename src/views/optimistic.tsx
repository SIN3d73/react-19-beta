import { useOptimistic, useState, useTransition } from "react";


interface ItemModel {
  hours: number,
  key: string
}

const initialData = new Map<string, number>([['mo', 2], ['tu', 0], ['we', 0]])

const fakeDelayAction = (item: ItemModel): Promise<number> => {
  return new Promise((res, reject) => setTimeout(() =>
    item.hours && item.hours <= 8 ? res(item.hours) : reject(0), 1000));
};

const getNewMap = (state: Map<string, number>, key: string, hours: number) => {
  const result = new Map(state);
  result.set(key, hours);
  return result;
}

const Optimistic = () => {
  const [messages, setMessages] = useState(initialData);

  const [pending, startTransaction] = useTransition();

  const [optimisticMessages, setOptimisticMessage] = useOptimistic<Map<string, number>, ItemModel>(
    messages,
    (state, {hours, key}) => getNewMap(state, key, hours),
  );

  const sendFormData = async (item: ItemModel) => {
    try {
      const newHours = await fakeDelayAction(item);
      setMessages((state) => getNewMap(state, item.key, newHours));
      console.log('value changed', newHours);
    } catch (e) {
      setMessages((state) => getNewMap(state, item.key, messages?.get(item.key) || 0));
      console.error('value restored', messages?.get(item.key));
    }
  };

  const onChange = (item: ItemModel) => {
    startTransaction(async () => {
      setOptimisticMessage(item);
      await sendFormData(item);
    })
  }

  return (
    <>
      <h3>useOptimistic() example</h3>
      <div className="h-4 ms-12">{pending && 'loading...'}</div>
      {Array.from(optimisticMessages.entries()).map(([key, value]) => (
        <div key={key} className="flex gap-2 my-2">
          <label className="w-10">{key}</label>
          <input
            value={value}
            onChange={(e) => onChange({key: key, hours: +e.target.value})}
            className="border rounded px-1"
            type="number"
            name="hours"
            autoComplete="off"
          />
          {messages.get(key)}
        </div>
      ))}
    </>
  );
};

export default Optimistic;
