import { Field, Form, Formik,ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Sidebar.module.css";
import icons from "../../assets/icons.svg";
import Button from "../Button/Button";

const LocationSchema = Yup.object().shape({
  location: Yup.string(),
});
const Sidebar = () => {
  return (
    <div className={styles.filter_wrapper}>
      <Formik initialValues={{}}>
        {({ errors, touched }) => (
          <Form className={styles.form} >
            <div className={styles.input_wrapper}>
              <label className={styles.input_location_title} htmlFor="location">
                Location
              </label>
              <Field
                className={styles.input_location}
                name="location"
                type="text"
                placeholder="City"
              />
              <svg className={styles.icon} width="20" height="20">
                <use href={`${icons}#Map`} />
              </svg>
              <ErrorMessage name="location" component="span" className={styles.errorMessage} />
            </div>
          

            <p className={styles.filter_title}>Filters</p>
            <h3 className={styles.equipment_title}>Vehicle equipment</h3>
            <div
              role="group"
              aria-labelledby="features-group"
              className={styles.group_wrapper}
            >
              <label>
                <Field type="checkbox" name="features" value="AC" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#ac`} />
                  </svg>
                  AC
                </p>
              </label>
              <label>
                <Field type="checkbox" name="features" value="automatic" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#diagram`} />
                  </svg>
                  Automatic
                </p>
              </label>
              <label>
                <Field type="checkbox" name="features" value="kitchen" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#cup-hot`} />
                  </svg>
                  Kitchen
                </p>
              </label>
              <label>
                <Field type="checkbox" name="features" value="TV" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#tv`} />
                  </svg>
                  TV
                </p>
              </label>
              <label>
                <Field type="checkbox" name="features" value="bathroom" />
                <p>
                  <svg width="20" height="30">
                    <use href={`${icons}#water`} />
                  </svg>
                  Bathroom
                </p>
              </label>
            </div>

            <h3 className={styles.equipment_title}>Vehicle type</h3>
            <div
              role="group"
              aria-labelledby="form-group"
              className={styles.group_wrapper}
            >
              <label>
                <Field type="radio" name="form" value="panelTruck" />
                <p>
                  <svg width="32" height="32">
                    <use href={`${icons}#van`} />
                  </svg>
                  Van
                </p>
              </label>
              <label>
                <Field type="radio" name="form" value="fullyIntegrated" />
                <p>
                  <svg width="32" height="32">
                    <use href={`${icons}#full`} />
                  </svg>
                  Fully Integrated
                </p>
              </label>
              <label>
                <Field type="radio" name="form" value="alcove" />
                <p>
                  <svg width="32" height="32">
                    <use href={`${icons}#alcove`} />
                  </svg>
                  Alcove
                </p>
              </label>
            </div>
            {errors.bodyType && touched.bodyType ? (
              <div className={styles.error}>{errors.bodyType}</div>
            ) : null}

            <Button variant="filled" type="submit">
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Sidebar;
