import styles from "./ProductItem.module.css";

export default function ProductItem({ product, onRemove }) {
  return (
    <li className={styles.item}>
      <img
        className={styles.thumbnail}
        src={product.thumbnail}
        alt={product.title}
        width={80}
        height={80}
      />
      
      <button
        type="button"
        className={styles.removeButton}
        onClick={() => onRemove(product.id)}
        aria-label={`Remove ${product.title}`}
      >
        ✕
      </button>

      <div className={styles.info}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.price}>${product.price}</p>
      </div>
    </li>
  );
}