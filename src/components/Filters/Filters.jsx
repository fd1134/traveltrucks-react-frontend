import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import styles from "./Filters.module.css";
import icons from "../../assets/icons.svg";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";
import { fetchVehicles } from "../../redux/vehicles/operations";

// Validation schema
const LocationSchema = Yup.object().shape({
  location: Yup.string().optional(), // opsiyonel, zorunlu yapmak için .required("Location required") eklenebilir
  form: Yup.string().optional(),
  features: Yup.array().of(Yup.string()),
});

const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const initialValues = {
    location: filters.location || "",
    form: filters.form || "",
    features: filters.features || [],
    transmission: filters.transmission || "manuel", // Başlangıçta manuel olarak ayarla
  };

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(changeFilter(values));
    dispatch(fetchVehicles(values)).finally(() => setSubmitting(false));
  };

  const handleFeatureChange = (e, setFieldValue, values) => {
    const { value, checked } = e.target;

    // Güncellenmiş features array'ini oluştur
    const updatedFeatures = checked
      ? [...values.features, value]
      : values.features.filter((feature) => feature !== value);

    // Features değerini güncelle
    setFieldValue("features", updatedFeatures);

    // Eğer 'automatic' seçildiyse transmission'ı automatic yap
    if (value === "automatic") {
      setFieldValue("transmission", "automatic");
    } else if (!updatedFeatures.includes("automatic")) {
      setFieldValue("transmission", "manuel");
    }
  };

  return (
    <div className={styles.filter_wrapper}>
      <Formik
        initialValues={initialValues}
        validationSchema={LocationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting, setFieldValue, values }) => (
          <Form className={styles.form}>
            {/* Location input */}
            <div className={styles.input_wrapper}>
              <label className={styles.filter_title} htmlFor="location">
                Location
              </label>
              <Field
                className={styles.input_location}
                name="location"
                type="text"
                placeholder="City"
                aria-describedby={errors.location ? "location-error" : undefined}
              />
              <svg className={styles.icon} width="20" height="20">
                <use href={`${icons}#Map`} />
              </svg>
              {errors.location && touched.location && (
                <div id="location-error" className={styles.errorMessage}>
                  {errors.location}
                </div>
              )}
            </div>

            {/* Vehicle equipment */}
            <p className={styles.filter_title}>Filters</p>
            <h3 className={styles.equipment_title}>Vehicle equipment</h3>
            <div
              role="group"
              aria-labelledby="features-group"
              className={styles.group_wrapper}
            >
              {["AC", "automatic", "kitchen", "TV", "bathroom"].map((feature) => (
                <label key={feature}>
                  <Field
                    type="checkbox"
                    name="features"
                    value={feature}
                    onChange={(e) => handleFeatureChange(e, setFieldValue, values)}
                  />
                  <p>
                    <svg width="20" height="30">
                      <use href={`${icons}#${feature.toLowerCase()}`} />
                    </svg>
                    {feature.charAt(0).toUpperCase() + feature.slice(1)}
                  </p>
                </label>
              ))}
            </div>

            {/* Vehicle type */}
            <h3 className={styles.equipment_title}>Vehicle type</h3>
            <div
              role="group"
              aria-labelledby="form-group"
              className={styles.group_wrapper}
            >
              {[
                { value: "panelTruck", label: "Van", icon: "van" },
                { value: "fullyIntegrated", label: "Fully Integrated", icon: "full" },
                { value: "alcove", label: "Alcove", icon: "alcove" },
              ].map(({ value, label, icon }) => (
                <label key={value}>
                  <Field type="radio" name="form" value={value} />
                  <p>
                    <svg width="32" height="32">
                      <use href={`${icons}#${icon}`} />
                    </svg>
                    {label}
                  </p>
                </label>
              ))}
            </div>

            {/* Submit button */}
            <Button variant="filled" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Searching..." : "Search"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filters;