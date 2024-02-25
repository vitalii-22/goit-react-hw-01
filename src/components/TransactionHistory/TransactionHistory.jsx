import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.tableContainer}>
      <thead className={css.tableHead}>
        <tr className={css.tableSector}>
          <th className={css.tableHeadItem}>Type</th>
          <th className={css.tableHeadItem}>Amount</th>
          <th className={css.tableHeadItem}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr className={css.tableSector} key={item.id}>
              <td className={css.tableItem}>{item.type}</td>
              <td className={css.tableItem}>{item.amount}</td>
              <td className={css.tableItem}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
