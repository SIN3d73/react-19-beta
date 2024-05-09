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
  const [worklog, setWorklog] = useState(initialData);

  const [pending, startTransaction] = useTransition();

  const [optimisticWorklog, setOptimisticWorklog] = useOptimistic<Map<string, number>, ItemModel>(
    worklog,
    (state, {hours, key}) => getNewMap(state, key, hours),
  );

  const onChange = (item: ItemModel) => {
    startTransaction(async () => {
      try {
        setOptimisticWorklog(item);
        const newHours = await fakeDelayAction(item);
        setWorklog((state) => getNewMap(state, item.key, newHours));
        console.log('value changed', newHours);
      } catch (e) {
        setWorklog((state) => getNewMap(state, item.key, worklog?.get(item.key) || 0));
        console.error('value restored', worklog?.get(item.key));
      }
    })
  };

  return (
    <>
      <title>useOptimistic()</title>
      <a
        className="underline text-blue-600"
        href="https://react.dev/reference/react/useOptimistic"
        target="_blank"
      >
        useOptimistic()
      </a>

      <div className="h-4 ms-12">{pending && 'loading...'}</div>
      {Array.from(optimisticWorklog.entries()).map(([key, value]) => (
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
          {worklog.get(key)}
        </div>
      ))}
    </>
  );
};

export default Optimistic;
