import moment from 'moment'

export default [
  {
    id: "1",
    description: "water bill",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "2",
    description: "electric bill",
    note: "",
    amount: 11000,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "internet monthly",
    note: "",
    amount: 4400,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
