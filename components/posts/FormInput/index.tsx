type props = {
  label: string;
  formik?: any;
  name: string;
  type?: string;
  className?: string;
  placeholder?: string;
};

const InputComponent = ({
  label,
  formik,
  name,
  type,
  className,
  placeholder = "",
}: props) => {
  return (
    <div className={className}>
      <label
        className="flex flex-row mb-2 text-sm text-gray-500"
        htmlFor={name}
      >
        {label}
        {formik.touched[name] && formik.errors[name] ? (
          <div className="flex-1 ml-2 text-rose-500 text-left text-xs">
            {formik.errors[name]}
          </div>
        ) : null}
      </label>
      <input
        dir="ltr"
        placeholder={placeholder}
        className="text-left border p-2 text-sm rounded border-gray-200 outline-none w-full
             focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        type={type || "text"}
        id={name}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
    </div>
  );
};

export default InputComponent;
