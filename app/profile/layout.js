import Link from "next/link";
import styles from "../../components/modules/profiles/layout/ProfilesLayout.module.css";

export default function ProfileLayout({ children }) {
  return (
    <div className={styles.container}>
      <ul className={styles.profileInformaition}>
        <li>
          <Link href="/profile">پروفایل من</Link>
        </li>
        <li>
          <Link href="/profile/my-tours">تور ها من</Link>
        </li>
        <li>
          <Link href="/profile/transactions">تراکنش ها</Link>
        </li>
      </ul>

      <main className={styles.profile}>{children}</main>
    </div>
  );
}
